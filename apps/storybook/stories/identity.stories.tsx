import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  Balance,
  Identity,
  Name,
  Social,
} from "@composer-kit/ui/identity";

const meta: Meta<typeof Identity> = {
  component: Identity,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Identity>;

export const Primary: Story = {
  render: () => {
    return (
      <Identity address="0x" className="flex gap-2 items-center" token="cUSD">
        <Avatar />
        <div className="flex flex-col">
          <Name />
          <Balance />
        </div>
        <Social tag="twitter" />
      </Identity>
    );
  },
  name: "Indentity",
  args: {},
};
