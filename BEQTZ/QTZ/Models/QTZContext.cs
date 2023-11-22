using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace QTZ.Models;

public partial class QTZContext : DbContext
{
    public QTZContext()
    {
    }

    public QTZContext(DbContextOptions<QTZContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CatTipoProducto> CatTipoProducto { get; set; }

    public virtual DbSet<Comentarios> Comentarios { get; set; }

    public virtual DbSet<Compra> Compra { get; set; }

    public virtual DbSet<ContactoPersona> ContactoPersona { get; set; }

    public virtual DbSet<Persona> Persona { get; set; }

    public virtual DbSet<Producto> Producto { get; set; }

    public virtual DbSet<Usuario> Usuario { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(localdb)\\CompGo;Initial Catalog=QTZ;Integrated Security=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CatTipoProducto>(entity =>
        {
            entity.HasKey(e => e.iCveCatTipoProducto);

            entity.Property(e => e.iCveCatTipoProducto).ValueGeneratedNever();
            entity.Property(e => e.cDescripcion).HasMaxLength(50);
        });

        modelBuilder.Entity<Comentarios>(entity =>
        {
            entity.HasKey(e => e.iCveComentarios);

            entity.Property(e => e.iCveComentarios).ValueGeneratedNever();
            entity.Property(e => e.cComentario).HasMaxLength(100);
            entity.Property(e => e.dFechaRegistro).HasColumnType("datetime");

            entity.HasOne(d => d.iCvePersonaNavigation).WithMany(p => p.Comentarios)
                .HasForeignKey(d => d.iCvePersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Comentarios_Persona");

            entity.HasOne(d => d.iCveProductoNavigation).WithMany(p => p.Comentarios)
                .HasForeignKey(d => d.iCveProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Comentarios_Producto");
        });

        modelBuilder.Entity<Compra>(entity =>
        {
            entity.HasKey(e => e.iCveCompra);

            entity.Property(e => e.iCveCompra).ValueGeneratedNever();
            entity.Property(e => e.dFechaCompra).HasColumnType("datetime");

            entity.HasOne(d => d.iCvePersonaNavigation).WithMany(p => p.Compra)
                .HasForeignKey(d => d.iCvePersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Compra_Persona");

            entity.HasOne(d => d.iCveProductoNavigation).WithMany(p => p.Compra)
                .HasForeignKey(d => d.iCveProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Compra_Producto");
        });

        modelBuilder.Entity<ContactoPersona>(entity =>
        {
            entity.HasKey(e => e.iCveContactoPersona);

            entity.Property(e => e.iCveContactoPersona).ValueGeneratedNever();
            entity.Property(e => e.cCorreo).HasMaxLength(50);
            entity.Property(e => e.cTelefono).HasMaxLength(15);
            entity.Property(e => e.dFechaRegistro).HasColumnType("datetime");

            entity.HasOne(d => d.iCvePersonalNavigation).WithMany(p => p.ContactoPersona)
                .HasForeignKey(d => d.iCvePersonal)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ContactoPersona_Persona");
        });

        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.iCvePersona);

            entity.Property(e => e.cApellidoMaterno).HasMaxLength(20);
            entity.Property(e => e.cApellidoPaterno).HasMaxLength(20);
            entity.Property(e => e.cNombre).HasMaxLength(15);
            entity.Property(e => e.dFechaRegistro).HasColumnType("datetime");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.iCveProducto);

            entity.Property(e => e.iCveProducto).ValueGeneratedNever();
            entity.Property(e => e.cDescripcion)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.cPrecio)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.dFechaRegistro)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.iCveTipoProductoNavigation).WithMany(p => p.Producto)
                .HasForeignKey(d => d.iCveTipoProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Producto_CatTipoProducto");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.iCveUser);

            entity.Property(e => e.cPasword).HasMaxLength(100);
            entity.Property(e => e.cUser).HasMaxLength(10);
            entity.Property(e => e.dFechaRegistro).HasColumnType("datetime");

            entity.HasOne(d => d.iCvePersonaNavigation).WithMany(p => p.Usuario)
                .HasForeignKey(d => d.iCvePersona)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Usuario_Persona");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
