import * as React from "react"

export interface ToastProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface ToastActionElement {
  altText: string
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />
  }
)

Toast.displayName = "Toast"