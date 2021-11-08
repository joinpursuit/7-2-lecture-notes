/*
    
     ********  MERGE SORT  **********

    Merge sort is one of the most efficient sorting algorithms. 
    It works on the principle of Divide and Conquer. 
    Merge sort repeatedly breaks down a list into several sublists 
    until each sublist consists of a single element and merging 
    those sublists in a manner that results into a sorted list.
    Starts by comparing every two elements and swapping them 
    if the first item is less than the second. 
    It then merges each of the resulting lists of two into 
    lists of four using the same comparison, then merges those lists of four, 
    and so on; until at last two lists are merged 
    into the final sorted list.

    Merge sort is a fast, stable sort,
    meaning it will keep the elements in original order 
    in the case of duplicate or equal values.
    Time complexity: O(n(logn));
    Space is O(n) - one of its weaknesses.
    Merge sort is great in multi-threaded languages like Java
    as threads working side by side can sort the arrays while they are bing
    split at once.
    

    
    Merge sort by the numbers 

    Imagine we need to sort the following array:
    [4, 8, 7, 2, 11, 1, 3]

    1.  DIVIDE - Split the array in two
        
        [4, 8, 7, 2], [11, 1, 3]

    2.  Continue splitting until all arrays are SINGLE ELEMENTS

         [4, 8, 7, 2], [11, 1, 3]
              |             |
        [4, 8]  [7, 2] [11,1] [3]
          |        |      |     
        [4], [8], [7], [2], [11], [1], [3]
        
    3. CONQUER - pushing the elements into a new array one by one

         [4], [8], [7], [2], [11], [1], [3]
            |          |          |     |
          [4, 8], [2, 7],  [1, 11] , [3]

    4.  Continue until we have one array
        [ 4, 8], [2, 7],  [1, 11] , [3]
            |       |      |     |
          [2, 4, 7, 8], [1, 3, 11]
                |            |
            [1, 2, 3, 4, 7, 8, 11]

    */          