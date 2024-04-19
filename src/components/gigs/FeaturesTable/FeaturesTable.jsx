import React from 'react';
import Table from 'react-bootstrap/Table'; 
import { useTranslation } from 'react-i18next';
const FeaturesTable = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>{t("whatsIncluded")}</h4>
      <Table striped bordered hover>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.feature}</td>
              <td>{item.mark}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FeaturesTable;