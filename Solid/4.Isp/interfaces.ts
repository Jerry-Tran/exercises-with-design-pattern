export interface Printer {
  print(document: string): void;
}

export interface Scanner {
  scan(document: string): void;
}

export interface Fax {
  fax(document: string): void;
}
