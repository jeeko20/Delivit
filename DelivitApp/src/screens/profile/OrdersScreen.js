import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const mockOrders = [
  {
    id: '1',
    date: '2024-01-15',
    total: 250,
    status: 'Livré',
    items: 3,
  },
  {
    id: '2',
    date: '2024-01-18',
    total: 180,
    status: 'En livraison',
    items: 2,
  },
  {
    id: '3',
    date: '2024-01-20',
    total: 320,
    status: 'En préparation',
    items: 5,
  },
];

const OrdersScreen = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Livré':
        return '#4CAF50';
      case 'En livraison':
        return '#2196F3';
      case 'En préparation':
        return '#FF9800';
      default:
        return '#666';
    }
  };

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Commande #{item.id}</Text>
        <Text style={[styles.orderStatus, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      
      <View style={styles.orderDetails}>
        <View style={styles.detailRow}>
          <Icon name="calendar-outline" size={16} color="#666" />
          <Text style={styles.detailText}>{item.date}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Icon name="cube-outline" size={16} color="#666" />
          <Text style={styles.detailText}>{item.items} articles</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Icon name="cash-outline" size={16} color="#666" />
          <Text style={styles.detailTotal}>{item.total} HTG</Text>
        </View>
      </View>
      
      <View style={styles.orderFooter}>
        <Text style={styles.viewDetails}>Voir les détails</Text>
        <Icon name="chevron-forward" size={20} color="#FF6B35" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mes Commandes</Text>
      </View>
      
      <FlatList
        data={mockOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ordersList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="bag-outline" size={80} color="#ccc" />
            <Text style={styles.emptyText}>Aucune commande</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  ordersList: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderDetails: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
  detailTotal: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  viewDetails: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 20,
  },
});

export default OrdersScreen;
