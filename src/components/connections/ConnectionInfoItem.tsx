import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import { Key } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ConnectionInfoItemProps = {
  items: ConnectionInfo[];
};

const TwoTextColumn = ({ topText, bottomText }: { topText: string; bottomText: string }) => (
  <View style={styles.container}>
    <Text style={{ ...typography.caption, color: '#000' }}>{topText}</Text>
    <Text style={{ ...typography.caption, color: '#000' }}>{bottomText}</Text>
  </View>
);

export const ConnectionInfoBar: React.FC<ConnectionInfoItemProps> = ({ items }) => {
  return (
    <View style={styles.barContainer}>
      {items.map((item: { title: string; value: string }, index: Key | null | undefined) => (
        <TwoTextColumn key={index} topText={item.title} bottomText={item.value} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: spacing.md,
    elevation: spacing.xs,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: spacing.xxs },
    shadowOpacity: 0.35,
    shadowRadius: spacing.xs,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    backgroundColor: colors.palette.tertiary,
  },
});
