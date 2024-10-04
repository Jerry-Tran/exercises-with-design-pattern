import { OldFashionedPrinter } from '../../Solid/4.Isp/OldFashionedPrinter'; 

let consoleOutput: string[] = [];
const mockedLog = (output: string) => consoleOutput.push(output);
console.log = mockedLog;

beforeEach(() => {
    consoleOutput = [];
});

test("should prints a document", () => {
    const printer = new OldFashionedPrinter();
    printer.print("Document 1");

    expect(consoleOutput).toEqual([
        "Printing document: Document 1"
    ]);
});


