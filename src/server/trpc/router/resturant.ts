import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const resturantRouter = router({
  create: publicProcedure
    .input(
      z.object({
        resturant_name: z.string(),
        email: z.string(),
        password: z.string(),
        name: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { resturant_name, email, password, name } = input;
      if (ctx.session?.user.role !== "ADMIN") {
        throw new Error("ليس لديك صلاحية لإضافة مطعم");
      }

      const userExist = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (userExist) {
        throw new Error("هذا البريد الإلكتروني مستخدم من قبل");
      }

      const user = await ctx.prisma.user.create({
        data: {
          email,
          password,
          name,
        },
      });

      const resturant = await ctx.prisma.resturant.create({
        data: {
          name: resturant_name,
          Branch: {
            create: {
              name: resturant_name + " الفرع الرئيسي",
              user: {
                connect: {
                  id: user.id,
                },
              },
            },
          },
        },
      });

      return resturant;
    }),
});
