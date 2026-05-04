export default function CompanyItem({ company }) {
  return (
    <li className="company">
      <p className="company-name">{company.companyName}</p>
    </li>
  );
}
