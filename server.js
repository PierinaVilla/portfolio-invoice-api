const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const postedInvoices = [
  {
    invoiceNumber: "INV-2026-001",
    vendorVat: "IT12345678901",
    amount: 1450.5,
    currency: "EUR",
    erpDocumentNumber: "ERP-100001",
  },
  {
    invoiceNumber: "INV-2026-0917",
    vendorVat: "IT12345678901",
    amount: 980.0,
    currency: "EUR",
    erpDocumentNumber: "ERP-100002",
  },
];

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "Portfolio Invoice API",
  });
});

app.get("/api/invoices/:invoiceNumber", (req, res) => {
  const { invoiceNumber } = req.params;

  const invoice = postedInvoices.find(
    (item) => item.invoiceNumber === invoiceNumber,
  );

  if (!invoice) {
    return res.json({
      found: false,
    });
  }

  return res.json({
    found: true,
    invoice,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio Invoice API running on port ${PORT}`);
});
