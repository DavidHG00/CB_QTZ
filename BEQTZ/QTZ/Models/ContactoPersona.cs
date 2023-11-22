using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class ContactoPersona
{
    public int iCveContactoPersona { get; set; }

    public int iCvePersonal { get; set; }

    public string cCorreo { get; set; } = null!;

    public string? cTelefono { get; set; }

    public DateTime dFechaRegistro { get; set; }

    public virtual Persona iCvePersonalNavigation { get; set; } = null!;
}
