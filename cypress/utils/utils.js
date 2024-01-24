export function checkVerticalDistance(
  headingSelector,
  paragraphSelector,
  expectedDistance
) {
  cy.get(headingSelector).then((heading) => {
    cy.get(paragraphSelector).then((paragraph) => {
      const headingRect = heading[0].getBoundingClientRect();
      const paragraphRect = paragraph[0].getBoundingClientRect();
      const verticalDistance = Math.abs(paragraphRect.top - headingRect.bottom);
      expect(verticalDistance).to.eq(expectedDistance);
    });
  });
}
