using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class Comentarios
{
    public int iCveComentarios { get; set; }

    public int iCveProducto { get; set; }

    public int iCvePersona { get; set; }

    public string cComentario { get; set; } = null!;

    public DateTime dFechaRegistro { get; set; }

    public virtual Persona iCvePersonaNavigation { get; set; } = null!;

    public virtual Producto iCveProductoNavigation { get; set; } = null!;
}
