import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "relative overflow-hidden transition-all",
  {
    variants: {
      variant: {
        // Transparent card with gradient border stroke
        transparent: [
          "bg-[rgb(27,31,36)]",
          "rounded-[28px]",
          "before:absolute before:inset-0",
          "before:rounded-[28px]", 
          "before:p-[1px]",
          "before:bg-gradient-to-br before:from-white/10 before:to-white/0",
          "before:-z-10",
          "after:absolute after:inset-[1px]",
          "after:rounded-[27px]",
          "after:bg-[rgb(20,22,26)]",
          "after:shadow-[inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15),inset_4px_4px_4px_0px_rgba(255,255,255,0.03)]",
          "after:-z-[1]"
        ].join(" "),
        
        // Elevated card with inset shadows and dark background
        elevated: [
          "bg-[rgb(20,22,26)]",
          "rounded-[28px]",
          "shadow-[inset_-5px_-9px_11px_0px_rgba(0,0,0,0.15),inset_4px_4px_4px_0px_rgba(255,255,255,0.03)]",
          "border border-white/5"
        ].join(" "),

        // Simple glass card
        glass: [
          "bg-gray-900/60",
          "backdrop-blur-sm",
          "rounded-2xl",
          "border border-gray-800/80",
          "shadow-2xl",
          "hover:shadow-blue-900/30",
          "hover:border-gray-700"
        ].join(" "),

        // Real card with subtle gradient border and depth
        realcard: [
          "bg-[rgb(24,27,32)]",
          "rounded-[28px]",
          "before:absolute before:inset-0",
          "before:rounded-[28px]",
          "before:p-[1.5px]",
          "before:bg-gradient-to-br before:from-white/15 before:via-white/5 before:to-transparent",
          "before:-z-10",
          "after:absolute after:inset-[1.5px]",
          "after:rounded-[26.5px]",
          "after:bg-[rgb(18,21,25)]",
          "after:shadow-[inset_-6px_-10px_14px_0px_rgba(0,0,0,0.2),inset_5px_5px_6px_0px_rgba(255,255,255,0.04)]",
          "after:-z-[1]",
          "hover:before:from-white/20 hover:before:via-white/8"
        ].join(" "),
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "default",
    },
  }
)

const pillVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all font-bold tracking-tight",
  {
    variants: {
      variant: {
        transparent: [
          "bg-transparent",
          "border border-white/10",
          "text-white",
          "hover:border-white/20"
        ].join(" "),
        
        elevated: [
          "bg-gradient-to-b from-[#267BF1] to-[#15468B]",
          "text-white",
          "shadow-[inset_2px_2px_8px_0px_rgba(255,255,255,0.25),inset_-2px_-2px_7px_0px_rgba(51,42,42,0.15)]"
        ].join(" "),
      },
      size: {
        sm: "px-3 py-1 text-xs",
        default: "px-4 py-1.5 text-sm",
        lg: "px-6 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "default",
    },
  }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight text-white", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-400", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative z-10", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

interface PillProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pillVariants({ variant, size }), className)}
        style={{ letterSpacing: '-0.4px', lineHeight: '18px' }}
        {...props}
      />
    )
  }
)
Pill.displayName = "Pill"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants, Pill, pillVariants }