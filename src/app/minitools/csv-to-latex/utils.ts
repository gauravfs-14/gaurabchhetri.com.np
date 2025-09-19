export type AlignmentMode ="left" | "center" | "right";
export type Delimiter = "," | "\t" | ";" | "|";
export type ColSep = "|none" | "|outer" | "|all";
export interface TableConfig {
  raw: string;
  delimiter: Delimiter;
  trimSpace: boolean;
  alignmentMode: AlignmentMode;
  colSep: ColSep;
  hasHeader: boolean;
  caption: string;
  label: string;
  customAlign: string;
}

export const exampleCSV = `Name, Dept, GPA, Credits
Alice, CS, 3.85, 92
Bob, Math, 3.50, 78
Carla, Physics, 3.92, 110`;

export const defaultConfig: TableConfig = {
  raw: exampleCSV,
  delimiter: ",",
  trimSpace: true,
  alignmentMode: "left",
  colSep: "|none",
  hasHeader: true,
  caption: "Example Caption",
  label: "example-table",
  customAlign: "",
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
};

export const constructTable = (config: TableConfig) => {
  const rows = parseTable(config.raw, config.delimiter, {
    trim: config.trimSpace
  });
  const colCount = rows.reduce((m, r) => Math.max(m, r.length), 0);
  const columnSpec = buildSpec(
    config.alignmentMode,
    colCount,
    config.colSep,
    config.customAlign
  );
  return toLatex(rows, {
    hasHeader: config.hasHeader,
    columnSpec,
    caption: config.caption,
    label: config.label,
  });
};

export const parseTable = (
  csv: string,
  delimiter: Delimiter,
  options: { trim: boolean }
) => {
  let rows = csv.trim().split("\n").map((row) => row.split(delimiter));
  if (options.trim) {
    rows = rows.map((row) => row.map((cell) => cell.trim()));
  }
  return rows;
};

export const buildSpec = (
  alignmentMode: AlignmentMode,
  colCount: number,
  colSep: ColSep,
  customAlign: string
) => {
  
    if (customAlign) {
      return customAlign;
    }

    let spec = "l";
    if (alignmentMode == "left") spec = "l";
    else if (alignmentMode == "center") spec = "c";
    else if (alignmentMode == "right") spec = "r";

    if (colSep === "|none") {
      return spec.repeat(colCount);
    } else if (colSep === "|outer") {
      return "|" + spec.repeat(colCount) + "|";
    } else if (colSep === "|all") {
      return ("|" + spec).repeat(colCount) + "|";
    }
    return spec.repeat(colCount);
};

export const toLatex = (
  rows: string[][],
  options: {
    hasHeader: boolean;
    columnSpec: string;
    caption: string;
    label: string;
  }
) => {
  const latex = `
\\begin{table}[htbp]
  \\centering
  \\caption{${options.caption}}
  \\label{tab:${options.label}}
  \\begin{tabular}{${options.columnSpec}}
  \\toprule${
    options.hasHeader
      ? "\n  " + rows[0].map((cell) => `\\textbf{${cell}}`).join(" & ") + " \\\\" + "\n  \\midrule"
      : ""
  }
  ${rows
    .slice(1)
    .map((row) => row.join(" & "))
    .join(" \\\\ \n  ") + " \\\\"}
  \\bottomrule
  \\end{tabular}
\\end{table}
`;
  return latex;
};
