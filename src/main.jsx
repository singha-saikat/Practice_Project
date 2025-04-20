import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  action,
  createContactAction,
  deleteContactAction,
  updateContactFavorite,
} from "./actions/createContactsAction";
import Contact from "./ContactPage";
import EditContact from "./Edit";
import ErrorPage from "./ErrorPage";
import Index from "./Index";
import "./index.css";
import { getContactLoader } from "./loaders/contactLoader";
import { loader } from "./loaders/contactsLoader";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts",
            children: [
              {
                index: true,
                element: <Index />,
              },
              {
                path: ":contactId",
                element: <Contact />,
                loader: getContactLoader,
                action: updateContactFavorite,
              },
              {
                path: ":contactId/edit",
                element: <EditContact />,
                loader: getContactLoader,
                action: action,
              },
              {
                path: ":contactId/destroy",
                action: deleteContactAction,
                errorElement: <div>Ops! There was an error.</div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
