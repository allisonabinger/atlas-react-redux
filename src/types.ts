import { FormEvent } from "react";

export interface CardType {
    id: number;
    title: string;
    description: string;
}

export interface ListType {
    id: number;
    title: string;
    cardIds: number[];
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
