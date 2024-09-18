import { FormEvent } from "react";

export interface Card {
    id: number;
    title: string;
    description: string;
}

export interface List {
    id: number;
    title: string;
    cards: Card[];
}

interface NewListFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
}

interface NewListFormElement extends HTMLFormElement {
  readonly elements: NewListFormElements;
}

interface NewCardFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
}
interface NewCardFormElement extends HTMLFormElement {
  readonly elements: NewCardFormElements;
}

export type NewListFormEvent = FormEvent<NewListFormElement>;

export type NewCardFormEvent = FormEvent<NewCardFormElement>;
