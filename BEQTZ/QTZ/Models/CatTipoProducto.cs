using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class CatTipoProducto
{
    public int iCveCatTipoProducto { get; set; }

    public string cDescripcion { get; set; } = null!;

    public bool cActivo { get; set; }

    public virtual ICollection<Producto> Producto { get; } = new List<Producto>();
}
