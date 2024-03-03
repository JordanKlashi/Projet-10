import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    beforeEach(() => {
      jest.useFakeTimers({});
    })

    afterEach(() => {
      jest.clearAllTimers();
    })

    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      act(() => jest.advanceTimersByTime(5000))
      await screen.findByText("Envoyer");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
