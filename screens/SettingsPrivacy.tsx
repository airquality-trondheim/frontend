import { Grid, Row } from 'native-base';
import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import PrivacyElement from '../components/settingFolder/PrivacyElement';
import settingPrivacyArray from '../constants/SettingPrivacyArray';
import { DARKGRAY } from '../constants/Colors';

function SettingsPrivacy() {
  return (
    <ScrollView style={styles.scrollViewStyling}>
      <Grid>
        <Row style={styles.privacyDesc}>
          <Text style={styles.privacyDescText}>
            Ditt personvern er svært viktig for oss. For å kunne tilby vår
            tjeneste kan det hende vi trenger å samle og behandle deler av din
            personlig informasjon. Nedenfor kan du lese om hvordan vi beskytter
            ditt personvern.
          </Text>
        </Row>
        {settingPrivacyArray.map(createPrivacySection)}
      </Grid>
    </ScrollView>
  );
}

type privacySectionType = {
  id: number;
  header: string;
  desc: string;
};

const createPrivacySection = (privacySection: privacySectionType) => {
  return (
    <PrivacyElement
      key={privacySection.id}
      header={privacySection.header}
      desc={privacySection.desc}
    />
  );
};

export default SettingsPrivacy;

const styles = StyleSheet.create({
  scrollViewStyling: {
    paddingBottom: 20,
  },
  privacyDesc: {
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 25,
    paddingTop: 30,
  },
  privacyDescText: {
    fontSize: 18,
    color: DARKGRAY,
  },
});
