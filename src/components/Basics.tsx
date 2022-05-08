import type { Component } from "solid-js";
import { formatPhone } from "utils/helpers";

export const Spinner: Component = () => (
  <div className="spinner">
    <div className="spinner-inner">
      <i className="oldgold-text fas fa-circle-notch fa-2x fa-spin" />
    </div>
  </div>
);

export const Title: Component<{ centered?: boolean }> = (props) => (
  <h1 className="title" style={props.centered ? { textAlign: "center" } : undefined}>
    {props.children}
  </h1>
);

export const Title4: Component = (props) => (
  <h4 className="title is-4">{props.children}</h4>
);

export const Subtitle: Component<{ centered?: boolean }> = (props) => (
  <h3
    className="subtitle is-3"
    style={props.centered ? { textAlign: "center" } : undefined}
  >
    {props.children}
  </h3>
);

export const Columns: Component = (props) => (
  <div className="columns">
    {props.children}
  </div>
);

export const Column: Component<{ narrow?: boolean }> = (props) => (
<div className={"column" + (narrow ? " is-narrow" : "")}>{children}</div>
);

export const Box: React.FC = ({ children }) => (
  <div className="box">{children}</div>
);

export const Section: React.FC = ({ children }) => (
  <section className="section">{children}</section>
);

export const Container: React.FC = ({ children }) => (
  <div className="container">{children}</div>
);

interface TooltipProps {
  content: string;
  type?: "left" | "right" | "multiline";
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  type,
  children
}) => (
  <span
    style={{ cursor: "pointer" }}
    data-tooltip={content}
    className={"tooltip is-tooltip" + (type ? `is-tooltip-${type}` : "")}
  >
    {children}
  </span>
);

export const CheckOrCross: React.FC<{ checked: boolean }> = ({ checked }) => (
  <span className="icon is-medium">
    <i className={"fas fa-lg fa-" + (checked ? "check" : "times")} />
  </span>
);

export interface DividerProps {
  vertical?: boolean;
  content?: string;
}

export const Divider: React.FC<DividerProps> = ({ vertical, content }) => {
  const className = vertical ? "is-divider-vertical" : "is-divider";

  if (content) {
    return <div className={className} data-content={content} />;
  } else {
    return <div className={className} />;
  }
};

export const EmailLink: React.FC<{ email: string }> = ({ email }) => (
  <a href={"mailto:" + email}>{email}</a>
);

export const PhoneLink: React.FC<{ phone: string }> = ({ phone }) => (
  <a href={"tel:" + phone}>{formatPhone(phone)}</a>
);
