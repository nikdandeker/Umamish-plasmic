// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzQ2m2Ed57Mp6kaUKkBwef
// Component: Er8zUyfMaH0uh
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsp7PhKcXg1DklD1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: p7phKcXg1dklD1/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_beverage_products.module.css"; // plasmic-import: kzQ2m2Ed57Mp6kaUKkBwef/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: Er8zUyfMaH0uh/css

import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: cnLgBjsWA4yReE/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: M6dVYzFWgMCrZ5/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: l59A-sfN86fI8q/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Yrk92xMAHbGqjd/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsp7PhKcXg1DklD1()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column___5GlhP)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zVYdT)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__zvwLi
              )}
            >
              {"Juicy Juice"}
            </h3>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oIv8K
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                : "Lorem ipsum dolor sit amet, consectetur adipiscing"}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lAKs)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__m7E8B
                )}
              >
                {"Connect with us"}
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gEjV)}
              >
                {true ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___9HXo9
                    )}
                    component={Link}
                    href={"#" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    <Icon3Icon
                      className={classNames(projectcss.all, sty.svg___1WKnN)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                ) : null}
                {true ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__cpJbr
                    )}
                    component={Link}
                    href={"#" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__tNwwE)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                ) : null}
                {true ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__qTmdw
                    )}
                    component={Link}
                    href={"#" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    <Icon28Icon
                      className={classNames(projectcss.all, sty.svg__vwvCp)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                ) : null}
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column___4UqTh)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ak4Zx)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__g7YQa
              )}
            >
              {"Company"}
            </h3>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cWwi7)}
            >
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__rAt1S
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___0GJqU)}
                    role={"img"}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gabZl
                  )}
                >
                  {"About"}
                </div>

                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___7Js8W)}
                    role={"img"}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__hrCl
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__tYfog)}
                    role={"img"}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sRxBu
                  )}
                >
                  {"Twitter"}
                </div>

                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___4Liec)}
                    role={"img"}
                  />
                ) : null}
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.column__m2Y0Z)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nUvb6)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__oushn
              )}
            >
              {"Legal"}
            </h3>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9Nu1N)}
            >
              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__onAqe
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__kzrYa)}
                    role={"img"}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sEtDa
                  )}
                >
                  {"Privacy Policy"}
                </div>

                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__prahg)}
                    role={"img"}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={p.PlasmicLink}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__iXc0
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__hmVlO)}
                    role={"img"}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ysicn
                  )}
                >
                  {"Terms"}
                </div>

                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___2Bdpv)}
                    role={"img"}
                  />
                ) : null}
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sNqMh)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__yqpR)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ooLuX
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {"?? Company. All rights reserved. Site proudly built with "}
              </React.Fragment>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  projectcss.plasmic_default__inline,
                  sty.link__b3A4L
                )}
                component={Link}
                href={"https://www.plasmic.app" as const}
                platform={"nextjs"}
              >
                {"Plasmic"}
              </p.PlasmicLink>
              <React.Fragment>{"."}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
