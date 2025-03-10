import { Hypothesis, SpeechStateExternalEvent } from "speechstate";
import { AnyActorRef } from "xstate";

export interface Intent {
  category: string;
  confidenceScore: number;
}

export interface Entity {
  category: string;
  text: string;
  confidenceScore: number;
  offset: number;
  length: number;
}

export interface NLUObject {
  entities : Entity[];
  intents: Intent[];
  projectKind: string;
  topIntent: string;
}

export interface DMContext {
  spstRef: AnyActorRef;
  lastResult: Hypothesis[] | null;
  interpretation: NLUObject | null;
  person: string | null;
  day: string | null;
  time: string | null;
}

export type DMEvents = SpeechStateExternalEvent | { type: "CLICK" };
