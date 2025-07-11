"use client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import {
  CodeHighlightAdapterProvider,
  createShikiAdapter,
} from "@mantine/code-highlight";
import { bundledLanguages, createHighlighter } from "shiki";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { RootStyleRegistry } from "./EmotionRootStyleRegistry";

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
    <RootStyleRegistry>
      <MantineEmotionProvider>
        <MantineProvider stylesTransform={emotionTransform}>
          <CodeHighlightAdapterProvider adapter={shikiAdapter}>
            <Notifications />
            <ModalsProvider>{children}</ModalsProvider>
          </CodeHighlightAdapterProvider>
        </MantineProvider>
      </MantineEmotionProvider>
    </RootStyleRegistry>
  );
}

export default MantineRegistry;
