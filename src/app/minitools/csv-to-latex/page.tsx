"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { copyToClipboard, constructTable, defaultConfig } from "./utils";
import type { Delimiter, AlignmentMode, ColSep, TableConfig } from "./utils";
import { InView } from "@/components/ui/in-view";

export default function CsvToLatex() {
  const [config, setConfig] = useState<TableConfig>(defaultConfig);
  const [latexString, setLatexString] = useState<string>(
    constructTable(config)
  );

  useEffect(() => {
    setLatexString(constructTable(config));
  }, [config]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <header className="text-center">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold">CSV to LaTeX</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Paste CSV, TSV, or any delimited table. Tweak options and export
              ready-to-use LaTeX.
            </p>
          </InView>
        </header>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          {/* Input Section */}
          <div className="border p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg font-semibold">Input Table</h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setConfig(defaultConfig);
                  }}
                >
                  Load Example
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left: Paste Box */}
              <div>
                <Label className="text-xs font-medium">
                  Paste your data here
                </Label>
                <Textarea
                  rows={20}
                  className="w-full border p-3 font-mono text-sm mt-2"
                  placeholder="Paste CSV or delimited text here"
                  value={config.raw}
                  onChange={(e) =>
                    setConfig({ ...config, raw: e.target.value })
                  }
                />
              </div>

              {/* Right: Options - Organized in sections */}
              <div className="space-y-6">
                {/* Basic Settings */}
                <div>
                  <h3 className="text-xs font-medium mb-3 text-muted-foreground">
                    Basic Settings
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs mb-2 block">Delimiter</Label>
                      <Select
                        value={config.delimiter}
                        onValueChange={(value) =>
                          setConfig({
                            ...config,
                            delimiter: value as Delimiter,
                          })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Comma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=",">Comma</SelectItem>
                          <SelectItem value="\t">Tab</SelectItem>
                          <SelectItem value=";">Semicolon</SelectItem>
                          <SelectItem value="|">Pipe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs mb-2 block">Header Row</Label>
                      <Select
                        value={String(config.hasHeader)}
                        onValueChange={(value) =>
                          setConfig({ ...config, hasHeader: value === "true" })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Formatting */}
                <div>
                  <h3 className="text-xs font-medium mb-3 text-muted-foreground">
                    Formatting
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs mb-2 block">
                        Alignment Mode
                      </Label>
                      <Select
                        value={config.alignmentMode}
                        onValueChange={(value) =>
                          setConfig({
                            ...config,
                            alignmentMode: value as AlignmentMode,
                          })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Left" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="left">Left</SelectItem>
                          <SelectItem value="center">Center</SelectItem>
                          <SelectItem value="right">Right</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs mb-2 block">
                        Column Separators
                      </Label>
                      <Select
                        value={config.colSep}
                        onValueChange={(value) =>
                          setConfig({ ...config, colSep: value as ColSep })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="|none">None</SelectItem>
                          <SelectItem value="|outer">Outer</SelectItem>
                          <SelectItem value="|all">All</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <Label className="text-xs mb-2 block">
                        Custom Column Specification
                      </Label>
                      <Input
                        className="w-full border p-2 font-mono text-sm"
                        placeholder="e.g., lcr or |l|c|r|"
                        value={config.customAlign || ""}
                        onChange={(e) =>
                          setConfig({ ...config, customAlign: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Table Options */}
                <div>
                  <h3 className="text-xs font-medium mb-3 text-muted-foreground">
                    Table Options
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs mb-2 block">Caption</Label>
                        <Input
                          className="w-full border p-2"
                          placeholder="Table caption"
                          value={config.caption}
                          onChange={(e) =>
                            setConfig({ ...config, caption: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label className="text-xs mb-2 block">Label</Label>
                        <Input
                          className="w-full border p-2"
                          placeholder="Table label"
                          value={config.label}
                          onChange={(e) =>
                            setConfig({ ...config, label: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="trim-cells"
                          checked={config.trimSpace}
                          onCheckedChange={() =>
                            setConfig({
                              ...config,
                              trimSpace: !config.trimSpace,
                            })
                          }
                        />
                        <Label htmlFor="trim-cells" className="text-xs">
                          Trim whitespace
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
        >
          {/* Output Section */}
          <div className="border p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-lg font-semibold">LaTeX Output</h2>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={() => copyToClipboard(latexString)}
              >
                Copy LaTeX
              </Button>
            </div>
            <Textarea
              className="w-full h-[300px] md:h-[400px] font-mono text-xs border p-3"
              readOnly
              placeholder="Generated LaTeX code will appear here..."
              value={latexString}
            />
            <p className="text-xs mt-2 text-muted-foreground">
              <code>{"\\usepackage{booktabs}"}</code> - Add this to your LaTeX
              preamble
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}
