import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          onPress={() => onPageChange(i)}
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: currentPage === i ? 'blue' : 'gray',
          }}
        >
          <Text style={{ color: currentPage === i ? 'white' : 'black' }}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return pages;
  };

  return <View style={{ flexDirection: 'row' }}>{renderPageNumbers()}</View>;
};

export default Pagination;