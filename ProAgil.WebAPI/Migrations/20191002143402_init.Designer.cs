﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProAgil.WebAPI.Data;

namespace ProAgil.WebAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191002143402_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("ProAgil.WebAPI.Model.Evento", b =>
                {
                    b.Property<int>("eventoId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("dataEvento");

                    b.Property<string>("local");

                    b.Property<string>("lote");

                    b.Property<int>("qntPessoas");

                    b.Property<string>("tema");

                    b.HasKey("eventoId");

                    b.ToTable("Eventos");
                });
#pragma warning restore 612, 618
        }
    }
}
