# React Advance concepts

This repository contains custom React hooks and components aimed at enhancing reusability and optimizing performance in React applications.

## Concepts

- [Error Boundaries](ErrorBoundaries/README.md)
- [Forward Refs](ForwardRefs/README.md)
- [Portals](Portals/README.md)
- [Higher Order Components](higher%20order%20components/README.md)
- [Pure Components](pure%20components/README.md)
- [Custom Hook](Custom%20hook/README.md)

---

## Custom Hook

The `Custom Hook` folder contains custom React hooks, including the `useCopyToClipboard` hook, which allows users to copy text from the page to the clipboard.

## Error Boundaries

The `ErrorBoundaries` folder contains components and utilities related to error boundaries in React applications. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application.

## Forward Refs

The `ForwardRefs` folder contains components and utilities related to forward refs in React, enabling passing DOM element references from child components to parent components. Forward refs allow you to access the DOM nodes or React components created in a child component from the parent component.

## Portals

The `Portals` folder contains components and utilities related to portals in React, providing a way to render children into a DOM node that exists outside of the DOM hierarchy of the parent component. Portals are useful for scenarios where you need to render content outside the typical DOM hierarchy, such as modal dialogs or tooltips.

## Higher Order Components

The `HigherOrderComponents` folder contains components and utilities related to higher-order components (HOCs) in React, enhancing the functionality of components by providing reusability, flexibility, separation of concerns, and composition. Higher-order components are functions that take a component and return a new component with enhanced functionality.

## Pure Components

The `PureComponents` folder contains components and utilities related to pure components in React, which re-render only when their props or state change, optimizing performance by performing shallow comparisons of props and state. Pure components are useful for scenarios where you want to prevent unnecessary re-renders in class components
