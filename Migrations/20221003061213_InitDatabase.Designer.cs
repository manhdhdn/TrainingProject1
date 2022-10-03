﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Training_Project_1.Models.Context;

#nullable disable

namespace Training_Project_1.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221003061213_InitDatabase")]
    partial class InitDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Training_Project_1.Models.Nominee", b =>
                {
                    b.Property<string>("NomineeID")
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("NomineeName")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("NomineeID");

                    b.ToTable("Nominees");
                });

            modelBuilder.Entity("Training_Project_1.Models.Post", b =>
                {
                    b.Property<string>("PostID")
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Experience")
                        .HasColumnType("int");

                    b.Property<DateTime>("PostedDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("Salary")
                        .HasColumnType("money");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(70)
                        .HasColumnType("nvarchar(70)");

                    b.Property<DateTime>("UntilDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.HasKey("PostID");

                    b.HasIndex("UserID");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Training_Project_1.Models.PostNominee", b =>
                {
                    b.Property<int>("PostNomineeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PostNomineeID"), 1L, 1);

                    b.Property<string>("NomineeID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("PostID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.HasKey("PostNomineeID");

                    b.HasIndex("NomineeID");

                    b.HasIndex("PostID");

                    b.ToTable("PostNominees");
                });

            modelBuilder.Entity("Training_Project_1.Models.Role", b =>
                {
                    b.Property<string>("RoleID")
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("RoleID");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Training_Project_1.Models.User", b =>
                {
                    b.Property<string>("UserID")
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("CV")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<DateTime>("DayOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool?>("Gender")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("NomineeID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("RoleID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.Property<bool>("Status")
                        .HasColumnType("bit");

                    b.HasKey("UserID");

                    b.HasIndex("NomineeID");

                    b.HasIndex("RoleID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Training_Project_1.Models.Post", b =>
                {
                    b.HasOne("Training_Project_1.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Training_Project_1.Models.PostNominee", b =>
                {
                    b.HasOne("Training_Project_1.Models.Nominee", "Nominee")
                        .WithMany()
                        .HasForeignKey("NomineeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Training_Project_1.Models.Post", "Post")
                        .WithMany()
                        .HasForeignKey("PostID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Nominee");

                    b.Navigation("Post");
                });

            modelBuilder.Entity("Training_Project_1.Models.User", b =>
                {
                    b.HasOne("Training_Project_1.Models.Nominee", "Nominee")
                        .WithMany()
                        .HasForeignKey("NomineeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Training_Project_1.Models.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Nominee");

                    b.Navigation("Role");
                });
#pragma warning restore 612, 618
        }
    }
}
