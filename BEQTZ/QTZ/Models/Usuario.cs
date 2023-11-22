using System;
using System.Collections.Generic;

namespace QTZ.Models;

public partial class Usuario
{
    public int iCveUser { get; set; }

    public int iCvePersona { get; set; }

    public string cUser { get; set; } = null!;

    public string cPasword { get; set; } = null!;

    public DateTime dFechaRegistro { get; set; }

    public bool bActivo { get; set; }

    public virtual Persona iCvePersonaNavigation { get; set; } = null!;
}
