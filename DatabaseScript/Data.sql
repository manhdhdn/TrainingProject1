USE [Training1]
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'10e763c5-8a3f-48ef-8d3e-c6ef1cad85b0', N'User', N'USER', N'8302af3d-23c9-4b1d-b71c-d393bde2d673')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'85f8f1c8-7653-4fbd-8da5-71eb0a81e0b6', N'Admin', N'ADMIN', N'58a3c513-5c57-44c2-9f43-27ba161ba38e')
GO
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'0d2c0d8e-15de-45bd-9cdb-a76c4f0c4a7f', N'huumanh.bmt.dn@gmail.com', N'HUUMANH.BMT.DN@GMAIL.COM', N'huumanh.bmt.dn@gmail.com', N'HUUMANH.BMT.DN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEMuQ8jmjKyr7iQt7LcWDbz1SKgxNlfPRgw/8cspVhhDGi26q9NS/c34mSsymov2WIg==', N'C4IXPFU3UVU2MATQMNIVMKLDS5T3JKSI', N'92d3196a-b4fd-45fc-94ae-aa785f9d9c9a', NULL, 0, 0, NULL, 1, 0)
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'0d2c0d8e-15de-45bd-9cdb-a76c4f0c4a7f', N'85f8f1c8-7653-4fbd-8da5-71eb0a81e0b6')
GO
INSERT [dbo].[Nominees] ([NomineeID], [NomineeName]) VALUES (N'53a90216-e826-4e9e-85dc-f6bcbb663dc2', N'Senior')
INSERT [dbo].[Nominees] ([NomineeID], [NomineeName]) VALUES (N'ad197094-e3f8-4347-bd55-719355ce4332', N'Junior')
INSERT [dbo].[Nominees] ([NomineeID], [NomineeName]) VALUES (N'bf3b3bb3-3017-44a8-9fc7-1bc97f6779fc', N'Fresher')
INSERT [dbo].[Nominees] ([NomineeID], [NomineeName]) VALUES (N'bfd3c105-4d83-4cf9-aaaa-181ce1cb9f8f', N'Internship')
GO
INSERT [dbo].[Roles] ([RoleID], [RoleName]) VALUES (N'12f99d93-e8cb-46e0-8158-d111ce6b0c2e', N'Admin')
INSERT [dbo].[Roles] ([RoleID], [RoleName]) VALUES (N'16141fce-03b5-4593-9866-8456a44ae6fc', N'User')
GO
INSERT [dbo].[Users] ([UserID], [Name], [Gender], [DayOfBirth], [PhoneNumber], [Email], [Address], [Status], [CV], [NomineeID], [RoleID]) VALUES (N'4d7078e9-ae49-49b1-8abe-810ecef15f57', N'Đoàn Hữu Mạnh', 0, CAST(N'2001-08-08T04:03:32.4250000' AS DateTime2), N'0326325345', N'huumanh.bmt.dn@gmail.com', NULL, 1, NULL, N'ad197094-e3f8-4347-bd55-719355ce4332', N'12f99d93-e8cb-46e0-8158-d111ce6b0c2e')
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221005024753_InitDatabase', N'6.0.9')
GO
