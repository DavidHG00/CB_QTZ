using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class Producto
{
    public int iCveProducto { get; set; }

    public int iCveTipoProducto { get; set; }

    public string cDescripcion { get; set; } = null!;

    public string cPrecio { get; set; } = null!;

    public string dFechaRegistro { get; set; } = null!;

    public bool bActivo { get; set; }

    public virtual ICollection<Comentarios> Comentarios { get; } = new List<Comentarios>();

    public virtual ICollection<Compra> Compra { get; } = new List<Compra>();

    public virtual CatTipoProducto iCveTipoProductoNavigation { get; set; } = null!;
}
