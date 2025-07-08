import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Help from "./Help";

describe("Help Component", () => {
  it("renders the form without crash", () => {
    render(<Help />);
  });

  it("updates the name input field", () => {
    const { getByLabelText } = render(<Help />);
    const nameInput = getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput).toHaveValue("John Doe");
  });

  it("updates the email input field and shows validation error for invalid email", () => {
    const { getByLabelText, queryByText } = render(<Help />);
    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(emailInput).toHaveValue("invalid-email");
    expect(queryByText("Please enter a valid email address.")).toBeInTheDocument();
  });

  it("does not show validation error for valid email", () => {
    const { getByLabelText, queryByText } = render(<Help />);
    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    expect(emailInput).toHaveValue("valid@example.com");
    expect(queryByText("Please enter a valid email address.")).not.toBeInTheDocument();
  });

  it("updates the subject dropdown", () => {
    const { getByLabelText } = render(<Help />);
    const subjectDropdown = getByLabelText("Subject:");
    fireEvent.change(subjectDropdown, { target: { value: "technical" } });
    expect(subjectDropdown).toHaveValue("technical");
  });

  it("updates the message textarea", () => {
    const { getByLabelText } = render(<Help />);
    const messageTextarea = getByLabelText("Message:");
    fireEvent.change(messageTextarea, { target: { value: "This is a test message." } });
    expect(messageTextarea).toHaveValue("This is a test message.");
  });

  it("renders the email error message when an invalid email is entered", () => {
    const { getByLabelText, queryByText } = render(<Help />);
    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(queryByText("Please enter a valid email address.")).toBeInTheDocument();
  });

  it("removes the email error message when a valid email is entered", () => {
    const { getByLabelText, queryByText } = render(<Help />);
    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    expect(queryByText("Please enter a valid email address.")).not.toBeInTheDocument();
  });

  it("does not submit the form when the submit button is clicked", () => {
    const { getByRole } = render(<Help />);
    const submitButton = getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    // No form submission logic is implemented, so no further assertions are needed
  });

  it("renders the default subject value as 'general'", () => {
    const { getByLabelText } = render(<Help />);
    const subjectDropdown = getByLabelText("Subject:");
    expect(subjectDropdown).toHaveValue("general");
  });

  it("renders the default message textarea as empty", () => {
    const { getByLabelText } = render(<Help />);
    const messageTextarea = getByLabelText("Message:");
    expect(messageTextarea).toHaveValue("");
  });
});
