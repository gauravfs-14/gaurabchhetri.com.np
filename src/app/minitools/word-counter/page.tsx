"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { copyToClipboard } from "../csv-to-latex/utils";
import { STOP_WORDS } from "./stop-words";

interface WordFrequency {
  word: string;
  frequency: number;
}

export default function WordCounterPage() {
  const [text, setText] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("gaurabchhetri-word-counter-text") || ""
      : ""
  );
  const [wordCount, setWordCount] = useState(
    parseInt(
      typeof window !== "undefined"
        ? localStorage.getItem("gaurabchhetri-word-counter-word-count") || "0"
        : "0"
    )
  );
  const [charCount, setCharCount] = useState(
    parseInt(
      typeof window !== "undefined"
        ? localStorage.getItem("gaurabchhetri-word-counter-char-count") || "0"
        : "0"
    )
  );
  const [wordFrequency, setWordFrequency] = useState<WordFrequency[]>(
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("gaurabchhetri-word-counter-word-frequency") ||
            "[]"
        : "[]"
    ) as WordFrequency[]
  );
  const [top10Words, setTop10Words] = useState<WordFrequency[]>(
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("gaurabchhetri-word-counter-top10-words") || "[]"
        : "[]"
    ) as WordFrequency[]
  );

  const [bottom10Words, setBottom10Words] = useState<WordFrequency[]>(
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("gaurabchhetri-word-counter-bottom10-words") ||
            "[]"
        : "[]"
    ) as WordFrequency[]
  );

  useEffect(() => {
    const words = text.split(/\s+/).filter(Boolean);
    const chars = text.replace(/\s+/g, "").length;
    setWordCount(words.length);
    setCharCount(chars);

    const normalizedTokens = words
      .map((w) => w.toLowerCase().replace(/^[^a-z0-9'-]+|[^a-z0-9'-]+$/gi, ""))
      .filter(Boolean)
      .filter((w) => !STOP_WORDS.has(w));

    const frequency = normalizedTokens.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const freqArray = Object.entries(frequency)
      .map(([word, frequency]) => ({ word, frequency }))
      .sort((a, b) => b.frequency - a.frequency);

    setWordFrequency(freqArray);
    setTop10Words(freqArray.slice(0, 10));
    setBottom10Words(freqArray.slice(-10));

    // Save to local storage
    localStorage.setItem("gaurabchhetri-word-counter-text", text);
    localStorage.setItem(
      "gaurabchhetri-word-counter-word-count",
      wordCount.toString()
    );
    localStorage.setItem(
      "gaurabchhetri-word-counter-char-count",
      charCount.toString()
    );
    localStorage.setItem(
      "gaurabchhetri-word-counter-word-frequency",
      JSON.stringify(wordFrequency)
    );
    localStorage.setItem(
      "gaurabchhetri-word-counter-top10-words",
      JSON.stringify(top10Words)
    );
    localStorage.setItem(
      "gaurabchhetri-word-counter-bottom10-words",
      JSON.stringify(bottom10Words)
    );
  }, [text, wordCount, charCount, wordFrequency, top10Words, bottom10Words]);

  return (
    <div className="min-h-screen bg-background" aria-hidden="true">
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
            <h1 className="text-2xl md:text-3xl font-bold">Word Counter</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Count the number of words in a text.
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
          <div className="border p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-lg font-semibold">Counts</h2>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{wordCount} words</Badge>
                <Badge variant="secondary">{charCount} characters</Badge>
              </div>
            </div>
            <Textarea
              rows={20}
              className="w-full border p-3 font-mono text-sm mt-2"
              placeholder="Paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {/* Actions */}
            <div className="flex items-center justify-start gap-2 mt-4">
              <Button
                variant="default"
                size="sm"
                className="cursor-pointer"
                onClick={() => copyToClipboard(text)}
              >
                Copy
              </Button>
              <Button
                size="sm"
                onClick={() => setText(text.toUpperCase())}
                className="cursor-pointer"
              >
                UPPER
              </Button>
              <Button
                size="sm"
                onClick={() => setText(text.toLowerCase())}
                className="cursor-pointer"
              >
                lower
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  setText(text.replace(/\b\w/g, (c) => c.toUpperCase()))
                }
                className="cursor-pointer"
              >
                Capitalize
              </Button>
              <Button
                variant="default"
                size="sm"
                className="cursor-pointer"
                onClick={() => {
                  const updated = text
                    .split(/([.!?]\s+)/)
                    .map((segment, i) => {
                      if (i % 2 === 0) {
                        const trimmed = segment.trimStart();
                        if (!trimmed) return segment;

                        return (
                          trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
                        );
                      }
                      return segment;
                    })
                    .join("");

                  setText(updated);
                }}
              >
                Title Case
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer ml-auto"
                onClick={() => setText("")}
              >
                Clear
              </Button>
            </div>
          </div>
        </InView>
        {wordFrequency.length > 0 && (
          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
          >
            <div className="border p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-lg font-semibold">Word Frequency</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {top10Words.length > 0 && (
                  <div>
                    <h3 className="text-md font-medium mb-2 border-b pb-2">
                      Top 10 Words
                    </h3>
                    <ul className="list-none">
                      {top10Words.map((word) => (
                        <li
                          key={word.word}
                          className="border-b pb-2 last:border-b-0 flex items-center justify-between"
                        >
                          {word.word}
                          <Badge variant="secondary" className="ml-4">
                            {word.frequency}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {bottom10Words.length > 0 && (
                  <div>
                    <h3 className="text-md font-medium mb-2 border-b pb-2">
                      Bottom 10 Words
                    </h3>
                    <ul className="list-none">
                      {bottom10Words.map((word) => (
                        <li
                          key={word.word}
                          className="border-b pb-2 last:border-b-0 flex items-center justify-between"
                        >
                          {word.word}
                          <Badge variant="secondary" className="ml-4">
                            {word.frequency}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </InView>
        )}
      </div>
      <div className="mt-20" />
    </div>
  );
}
