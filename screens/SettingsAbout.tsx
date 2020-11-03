/* eslint-disable max-len */
import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Grid, Row } from 'native-base';
import { EXTRADARKGRAY } from '../constants/Colors';
import SettingAboutElement from '../components/settingFolder/SettingAboutElement';

function SettingsAbout() {
  return (
    <ScrollView style={styles.scrollViewStyling}>
      <Grid>
        <Row style={styles.aboutDesc}>
          <Text style={styles.aboutText}>
            Frisk er en mobil applikasjon utviklet av en studentgruppe ved NTNU
            i sammenheng med gjennomføring av emnet TDT4290 Kundestyrt prosjekt.
            Dette prosjektet er en del av et sammarbeid mellom Trondheim
            Kommune, NTNU og Telenor, som har som formål å undersøke mulighetene
            for å forbedre tjenester innenfor luftkvalitet i Trondheim. Frisk er
            laget under vårsemesteret 2020 etter etterspørsel fra Telenor.
          </Text>
        </Row>
        <SettingAboutElement
          aboutHeader="Telenor Norge AS"
          aboutDesc="Telenor er landets største leverandør innenfor innhold-, telekommunikasjon- og datatjenester. Under utviklingen av Frisk har representanter fra Telenor gitt verdifull støtte og tilbakemeldinger."
        />
        <SettingAboutElement
          aboutHeader="MET"
          aboutDesc="Frisk benytter seg av WeatherAPI som er et grensesnitt mot et utvalg av data som er eid av Meteorologisk institutt. Dette APIet er brukt for å hente data om været og luftkvaliteten i Trondheim."
        />
      </Grid>
    </ScrollView>
  );
}

export default SettingsAbout;

const styles = StyleSheet.create({
  scrollViewStyling: {
    paddingBottom: 20,
  },
  aboutText: {
    fontSize: 18,
    color: EXTRADARKGRAY,
  },
  aboutDesc: {
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 25,
    paddingTop: 30,
  },
});
