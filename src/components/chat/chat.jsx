import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Chat(props) {
  const { data, onAction } = props;

  if (data["created_by"] === "server") {
    return _jsxs("div", {
      className: "w-full flex items-end p-2",
      children: [
        _jsx(FontAwesomeIcon, { className: "mb-4", icon: faRobot }),
        _jsxs("div", {
          children: [
            _jsx("div", {
              className: "bg-yellow-100 flex items-center justify-end m-1 p-2 w-72 flex-col",
              style: {
                borderRadius: "20px"
              },
              children: _jsx("p", {
                className: "whitespace-normal w-64",
                children: data.message
              })
            }),
            _jsx("div", {
              className: "m-1 p-2 w-72",
              children: data["related"] === null ? null : Object.values(data["related"]).map((value, index) => 
                _jsx("button", {
                  key: index,
                  style: {
                    backgroundColor: "#FFF9C4",
                    margin: "5px",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: 700,
                    fontSize: "13px",
                    ":hover": {
                      backgroundColor: "#FFF176"
                    },
                    ":active": {
                      backgroundColor: "#FFF59D"
                    }
                  },
                  onClick: () => onAction(value["tag"], value["text"]),
                  children: value["text"]
                }, index)
              )
            })
          ]
        }),
        _jsx("span", { className: "flex-1" })
      ]
    });
  } else if (data["created_by"] === "client") {
    return _jsxs("div", {
      className: "w-full flex items-end p-2",
      children: [
        _jsx("span", { className: "flex-1" }),
        _jsx("div", {
          className: "bg-yellow-200 flex items-center justify-end m-1 p-2 w-72",
          style: {
            borderRadius: "20px"
          },
          children: _jsx("p", {
            className: "whitespace-normal w-64",
            children: data.message
          })
        }),
        _jsx(FontAwesomeIcon, { className: "mb-2", icon: faUser })
      ]
    });
  }
  return _jsx("div", {});
}