import { render, screen } from "@testing-library/react";
import Header from "./../Header";

describe("Render header test", () => {
  it("renders appropriately", () => {
    render(<Header />);
    expect(screen.getByText("HOT SALES -30% EN SANDALIAS")).toBeInTheDocument();
  });
});
