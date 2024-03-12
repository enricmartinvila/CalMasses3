import React from 'react';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';

export default function EngPDF({ name, checkInDate, checkOutDate }) {
  const styles = {
    page: {
    paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
    },
    section: {
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 10,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
  };

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Congratulations, {name}!</Text>
            <Text style={styles.subtitle}>Special Gift!</Text>
            <Text style={styles.text}>Stay at Cal Masses</Text>
            <Text style={styles.text}>Carrer de la Riera, 7</Text>
            <Text style={styles.text}>08519 Folgueroles</Text>
            <Text style={styles.text}>Tel: 938 12 34 56</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Reservation</Text>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Check-in Date: {checkInDate}</Text>
            <Text style={styles.text}>Check-out Date: {checkOutDate}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Enjoy your stay!</Text>
            <Text style={styles.text}>We hope you have an unforgettable experience at Cal Masses.</Text>
          </View>
        </Page>
      </Document>
  );
}
