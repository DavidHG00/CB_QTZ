using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class Compra
{
    public int iCveCompra { get; set; }

    public int iCvePersona { get; set; }

    public int iCveProducto { get; set; }

    public DateTime dFechaCompra { get; set; }

    public virtual Persona iCvePersonaNavigation { get; set; } = null!;

    public virtual Producto iCveProductoNavigation { get; set; } = null!;
}
