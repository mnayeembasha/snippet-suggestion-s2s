const snippets=[
    {
        prefix: "eqtn",
        body: "/eqtn\\mathrm{",
        description: "Equation mode with math roman text",
    },
    {
        prefix: "frac",
        body: "\\frac{}{}",
        description: "Fraction",
    },
    {
        prefix: "sqrt",
        body: "\\sqrt{$1}",
        description: "Square root",
    },
    {
        prefix: "sum",
        body: "\\sum_{$1}^{$2}",
        description: "Summation",
    },
    {
        prefix: "int",
        body: "\\int_{$1}^{$2}",
        description: "Integral",
    },
    {
        prefix: "lim",
        body: "\\lim_{$1 \\to $2}",
        description: "Limit",
    },
    {
        prefix: "pmatrix",
        body: "\\begin{pmatrix}\n$1\n\\end{pmatrix}",
        description: "Matrix with parentheses",
    },
    {
        prefix: "align",
        body: "\\begin{align}\n$1\n\\end{align}",
        description: "Aligned equations",
    },
    {
        prefix: "vec",
        body: "\\vec{$1}",
        description: "Vector notation",
    },
    {
        prefix: "dot",
        body: "\\dot{$1}",
        description: "Dot notation (derivative)",
    },
    {
        prefix: "intvec",
        body: "\\int_{$1}^{\\infty}",
        description: "Integral to infinity",
    },
];
