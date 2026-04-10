import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slices/cartSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);
  const [loading, setLoading] = useState(false);
  
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('moncash');

  const handlePlaceOrder = async () => {
    if (!deliveryAddress || !phone) {
      Alert.alert('Erreur', 'Veuillez remplir l\'adresse et le numéro de téléphone');
      return;
    }

    setLoading(true);

    try {
      // TODO: Appel API réel pour créer la commande
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simuler la réussite de la commande
      dispatch(clearCart());
      
      Alert.alert(
        'Succès',
        'Votre commande a été passée avec succès!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Commandes'),
          },
        ]
      );
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = [
    { id: 'moncash', name: 'MonCash', icon: 'wallet-outline' },
    { id: 'natcash', name: 'NatCash', icon: 'card-outline' },
    { id: 'stripe', name: 'Carte Bancaire', icon: 'card' },
    { id: 'cash', name: 'Paiement à la livraison', icon: 'cash-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Résumé de la commande</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.orderItemName}>{item.name}</Text>
            <Text style={styles.orderItemQuantity}>x{item.quantity}</Text>
            <Text style={styles.orderItemPrice}>{item.price * item.quantity} HTG</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{totalAmount} HTG</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations de livraison</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Adresse de livraison"
          value={deliveryAddress}
          onChangeText={setDeliveryAddress}
          multiline
          numberOfLines={3}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Méthode de paiement</Text>
        
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentOption,
              paymentMethod === method.id && styles.paymentOptionActive,
            ]}
            onPress={() => setPaymentMethod(method.id)}
          >
            <Icon
              name={method.icon}
              size={24}
              color={paymentMethod === method.id ? '#FF6B35' : '#666'}
            />
            <Text
              style={[
                styles.paymentOptionText,
                paymentMethod === method.id && styles.paymentOptionTextActive,
              ]}
            >
              {method.name}
            </Text>
            {paymentMethod === method.id && (
              <Icon name="checkmark-circle" size={24} color="#FF6B35" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.placeOrderText}>Passer la commande</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  orderItemName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  orderItemQuantity: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  orderItemPrice: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: 'bold',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentOptionActive: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF5F0',
  },
  paymentOptionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#666',
  },
  paymentOptionTextActive: {
    color: '#FF6B35',
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#FF6B35',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
