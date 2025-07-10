"use client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import {
  CodeHighlightAdapterProvider,
  createShikiAdapter,
} from "@mantine/code-highlight";
import { bundledLanguages, createHighlighter } from "shiki";

async function loadShiki() {
  const shiki = await createHighlighter({
    langs: Object.keys(bundledLanguages),
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

function MantineRegistry({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}

export default MantineRegistry;
