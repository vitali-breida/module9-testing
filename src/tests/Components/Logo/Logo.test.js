import renderer from "react-test-renderer";
import Logo from "../../../app/Components/Logo/Logo";
import { render } from "@testing-library/react";

//afterEach(cleanup);
it("renders correctly", () => {
  //const tree = renderer.create(<Logo align="center" />).toJSON();
  //expect(tree).toMatchSnapshot();

  const { asFragment } = render(<Logo align="center" />);
  expect(asFragment()).toMatchSnapshot();
});
