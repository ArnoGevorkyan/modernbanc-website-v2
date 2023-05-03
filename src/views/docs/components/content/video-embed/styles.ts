import { createStyles } from "@mantine/core";

export default createStyles((theme, _params, getRef) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "4px 0"
  },
  title: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "28px",
    color: "#111827",
    marginRight: "8px"
  },
  description: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "16px",
    color: "#A1A1AA"
  },

  videoWrapper: {
    background: "red",
    height: "360px",
    width: "100%",
    backgroundColor: "#F6F6F6",
    border: "1px solid #EAEAEA",
    borderRadius: "6px",
    iframe: {
      border: "none"
    }
  }
}));
