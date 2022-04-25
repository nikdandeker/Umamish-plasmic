// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzQ2m2Ed57Mp6kaUKkBwef
// Component: u4in_MQXZhL3u2
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_beverage_products.module.css"; // plasmic-import: kzQ2m2Ed57Mp6kaUKkBwef/projectcss
import sty from "./PlasmicRatings.module.css"; // plasmic-import: u4in_MQXZhL3u2/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: IcyPRJEB5VFMix/icon

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};

export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};

type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootstars_five]: hasVariant(variants, "stars", "five"),
          [sty.rootstars_four]: hasVariant(variants, "stars", "four"),
          [sty.rootstars_one]: hasVariant(variants, "stars", "one"),
          [sty.rootstars_three]: hasVariant(variants, "stars", "three"),
          [sty.rootstars_two]: hasVariant(variants, "stars", "two"),
          [sty.rootstars_zero]: hasVariant(variants, "stars", "zero")
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {(hasVariant(variants, "stars", "zero") ? true : true) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__j95Rr, {
              [sty.svgstars_five__j95RRloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_zero__j95Rr4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__jT6Jo, {
              [sty.svgstars_five__jT6JOloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__jT6Jo7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__jT6JoSkx5H]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__jT6JOfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__jT6Jop9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__jT6Jo4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__wSGjW, {
              [sty.svgstars_five__wSGjWloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__wSGjW7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__wSGjWSkx5H]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__wSGjWfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__wSGjWp9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__wSGjW4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__qJ1Vc, {
              [sty.svgstars_five__qJ1VcloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__qJ1Vc7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__qJ1VcSkx5H]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__qJ1VcfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__qJ1VcP9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__qJ1Vc4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__qEthL, {
              [sty.svgstars_five__qEthLloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__qEthL7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one__qEthLSkx5H]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three__qEthLfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two__qEthLp9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero__qEthL4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? true
            : hasVariant(variants, "stars", "zero")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg___1Oy1Q, {
              [sty.svgstars_five___1Oy1QloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four___1Oy1Q7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_one___1Oy1QSkx5H]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svgstars_three___1Oy1QfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two___1Oy1QP9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svgstars_zero___1Oy1Q4DBf7]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg___8PzNk, {
              [sty.svgstars_five___8PzNKloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four___8PzNk7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_three___8PzNKfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svgstars_two___8PzNkp9LJh]: hasVariant(
                variants,
                "stars",
                "two"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__e3Njk, {
              [sty.svgstars_five__e3NjkloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__e3Njk7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svgstars_three__e3NjkfLamG]: hasVariant(
                variants,
                "stars",
                "three"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : true
        ) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__d1XJb, {
              [sty.svgstars_five__d1XJbloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svgstars_four__d1XJb7FQjL]: hasVariant(
                variants,
                "stars",
                "four"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant(variants, "stars", "five") ? true : true) ? (
          <StarIcon
            className={classNames(projectcss.all, sty.svg__m498H, {
              [sty.svgstars_five__m498HloWqW]: hasVariant(
                variants,
                "stars",
                "five"
              )
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>

      {p.renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotTargetNumReviews)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatings__VariantsArgs;
    args?: PlasmicRatings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRatings__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRatings__ArgProps,
      internalVariantPropNames: PlasmicRatings__VariantProps
    });

    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */
