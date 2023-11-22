using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class Persona
{
    public int iCvePersona { get; set; }

    public string cNombre { get; set; } = null!;

    public string cApellidoPaterno { get; set; } = null!;

    public string? cApellidoMaterno { get; set; }

    public DateTime dFechaRegistro { get; set; }

    public virtual ICollection<Comentarios> Comentarios { get; } = new List<Comentarios>();

    public virtual ICollection<Compra> Compra { get; } = new List<Compra>();

    public virtual ICollection<ContactoPersona> ContactoPersona { get; } = new List<ContactoPersona>();

    public virtual ICollection<Usuario> Usuario { get; } = new List<Usuario>();
}
