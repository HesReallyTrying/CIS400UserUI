import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Alert = ({
  msg, show, onClose, variant, dismissable,
}) => {
  const variantConfigs = (vari) => {
    // error variant
    if (vari === 'error') {
      return {
        viewStyle: styles.errorView,
        iconName: 'error-outline',
        iconColor: '#905300',
        textStyle: styles.errorText,
      };
    }
    // success variant
    return {
      viewStyle: styles.successView,
      iconName: 'check-circle-outline',
      iconColor: '#4F8A10',
      textStyle: styles.successText,
    };
  };

  return (
    <View style={styles.errorContainer}>
      {
        show
        && (
        <View style={variantConfigs(variant).viewStyle}>
          <View style={styles.closeButton}>
            {dismissable && (
              <Icon name="clear" type="material" size={20} color="#905300" onPress={onClose} />
            )}
          </View>
          <Icon name={variantConfigs(variant).iconName} type="material" size={35} color={variantConfigs(variant).iconColor} />
          <Text style={variantConfigs(variant).textStyle}>
            {msg}
          </Text>
        </View>
        )
      }
    </View>
  );
};

Alert.defaultProps = {
  dismissable: false,
  variant: 'success',
  onClose: null,
  show: true,
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  dismissable: PropTypes.bool,
  variant: PropTypes.string,
};

export default Alert;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 6,
    right: 10,
  },
  errorContainer: {
    width: '100%',
  },
  errorView: {
    width: '100%',
    backgroundColor: '#FEEFB3',
    marginBottom: 25,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  successView: {
    width: '100%',
    backgroundColor: '#DFF2BF',
    marginBottom: 25,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  errorText: {
    marginTop: 2,
    color: '#905300',
    textAlign: 'center',
    width: '85%',
    fontWeight: 'bold',
  },
  successText: {
    marginTop: 2,
    color: '#4F8A10',
    textAlign: 'center',
    width: '85%',
    fontWeight: 'bold',
  },
});
