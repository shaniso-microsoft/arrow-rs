searchState.loadedDescShard("arrow_ipc", 0, "Support for the Arrow IPC Format\nUtilities for converting between IPC types and native …\nGenerated code\nArrow IPC File and Stream Readers\nArrow IPC File and Stream Writers\nRepresents compressing a ipc stream using a particular …\nCompress the data in input buffer and write to output …\nCompresses the data in <code>input</code> to <code>output</code> and appends the …\nDecompress the data in input buffer and write to output …\nDecompresses the input into a <code>Buffer</code>\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGet the uncompressed length Notes: …\nAn owned container for a validated <code>Message</code>\nReturn the <code>Message</code>\nCreate an IPC Field from an Arrow Field\nDeserialize a Schema table from flat buffer format to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the Arrow data type from the flatbuffer Field table\nCreate an IPC dictionary encoding\nGet the IPC type of a data type\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSerialize a schema in IPC format\nTry to create a <code>MessageBuffer</code> from the provided <code>Buffer</code>\nTry deserialize flat buffer format bytes into a schema\nTry deserialize the IPC format bytes into a schema\nArrow File metadata\nLength of the data (this is aligned so there can be a gap …\nUser-defined metadata\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLength of the metadata\nIndex to the start of the RecordBlock (note this is past …\nVerifies that a buffer of bytes contains a <code>Footer</code> and …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given options, that a buffer of bytes …\nVerifies that a buffer of bytes contains a size prefixed …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given verifier options, that a buffer of\nEach constituent buffer is first compressed with the …\nOptional compression for the memory buffers constituting …\nProvided for forward compatibility in case we need to …\nFor sending dictionary encoding information. Any Field can …\nData structures for describing a table row batch (a …\nThe root Message type This union enables us to easily send …\nA data header describing the shared memory layout of a “…\nBuffers correspond to the pre-ordered flattened buffer tree\nCompressor library. For LZ4_FRAME, each compressed buffer …\nOptional compression of the message body\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf isDelta is true the values in the dictionary are to be …\nThe number of value slots in the Arrow array at this level …\nnumber of records / rows. The arrays in the batch should …\nIndicates the way the record batch body was compressed\nNodes correspond to the pre-ordered flattened logical …\nThe number of observed nulls. Fields with null_count == 0 …\nVerifies that a buffer of bytes contains a <code>Message</code> and …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given options, that a buffer of bytes …\nVerifies that a buffer of bytes contains a size prefixed …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given verifier options, that a buffer of\nSome types such as Utf8View are represented using a …\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nOpaque binary data\nLogically the same as Binary, but the internal …\nA Buffer represents a single contiguous memory segment\nThe stream makes use of compressed bodies as described in …\nThe stream makes use of multiple full dictionaries with the\nDate is either a 32-bit or 64-bit signed integer type …\nExact decimal value represented as an integer value in two…\nDictionary encoding metadata Maintained for forwards …\nEndianness of the platform producing the data\nRepresents Arrow Features that might not have full support …\nA field represents a named column in a record / row batch …\nuser defined key value pairs to add custom metadata to …\nSame as Binary, but with 64-bit offsets, allowing to …\nSame as List, but with 64-bit offsets, allowing to …\nSame as ListView, but with 64-bit offsets and sizes, …\nSame as Utf8, but with 64-bit offsets, allowing to …\nRepresents the same logical types that List can, but …\nA Map is a logical nested type that is represented as\nThese are stored in the flatbuffer in the Type union below\nContains two child arrays, run_ends and values. The …\nA Schema describes the columns in a row batch\nA Struct_ in the flatbuffer metadata is the same as an …\nTime is either a 32-bit or 64-bit signed integer type …\nTimestamp is a 64-bit signed integer representing an …\nTop-level Type value, enabling extensible type-specific …\nNeeded to make flatbuffers happy.\nA union is a complex type with children in Field By …\nUnicode with UTF-8 encoding\nLogically the same as Utf8, but the internal …\n0.1.0 (October 2016).\n0.2.0 (February 2017). Non-backwards compatible with V1.\n0.3.0 -&gt; 0.7.1 (May - December 2017). Non-backwards …\n= 0.8.0 (December 2017). Non-backwards compatible with V3.\n= 1.0.0 (July 2020). Backwards compatible with V4 (V5 …\nNumber of bits per value. The only accepted widths are 128 …\nNumber of bytes per value\nchildren apply only to nested data types like Struct, List …\nUser-defined metadata\nPresent only if the field is dictionary encoded.\nendianness of the buffer it is Little Endian by default if …\nReturns true if the endianness of the source system …\nFeatures used in the stream/file.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe known dictionary id in the application where this data …\nThe dictionary indices are constrained to be non-negative …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBy default, dictionaries are not ordered, or the order …\nSet to true if the keys within each value are sorted\nThe absolute length (in bytes) of the memory buffer. The …\nNumber of list items per value\nName is not required, in i.e. a List\nWhether or not this field can contain nulls. Should be …\nThe relative offset into the shared memory page where the …\nTotal number of decimal digits\nVerifies that a buffer of bytes contains a <code>Schema</code> and …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given options, that a buffer of bytes …\nNumber of digits after the decimal point “.”\nVerifies that a buffer of bytes contains a size prefixed …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given verifier options, that a buffer of\nThe timezone is an optional string indicating the name of …\nThis is the type of the decoded value if the field is …\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nCompressed Sparse format, that is matrix-specific.\nEXPERIMENTAL: Data structures for sparse tensors …\nCompressed Sparse Fiber (CSF) sparse tensor index.\naxisOrder stores the sequence in which dimensions were …\nWhich axis, row or column, is compressed\nThe location and size of the tensor’s data\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe location and size of the indices matrix’s data\nindicesBuffer stores the location and size of the array …\nindicesBuffers stores values of nodes. Each tensor …\nNon-negative byte offsets to advance one value cell along …\nThe type of values in indicesBuffer\nThe type of values in indicesBuffer\nThe type of values in indicesBuffers\nindptrBuffer stores the location and size of indptr array …\nindptrBuffers stores the sparsity structure. Each two …\nThe type of values in indptrBuffer\nCSF is a generalization of compressed sparse row (CSR) …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis flag is true if and only if the indices matrix is …\nThe number of non-zero values in a sparse tensor.\nVerifies that a buffer of bytes contains a <code>SparseTensor</code> …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given options, that a buffer of bytes …\nThe dimensions of the tensor, optionally named.\nVerifies that a buffer of bytes contains a size prefixed …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given verifier options, that a buffer of\nSparse tensor index\nThe type of data contained in a value cell. Currently only …\nReturns the variant’s name or “” if unknown.\nReturns the variant’s name or “” if unknown.\nData structures for dense tensors Shape data for a single …\nThe location and size of the tensor’s data\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nName of the dimension, optional\nVerifies that a buffer of bytes contains a <code>Tensor</code> and …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given options, that a buffer of bytes …\nThe dimensions of the tensor, optionally named\nLength of dimension\nVerifies that a buffer of bytes contains a size prefixed …\nAssumes, without verification, that a buffer of bytes …\nVerifies, with the given verifier options, that a buffer of\nNon-negative byte offsets to advance one value cell along …\nThe type of data contained in a value cell. Currently only …\nState for decoding arrays from an encoded <code>RecordBatch</code>\nA low-level, push-based interface for reading an IPC file\nArrow File reader\nBuild an Arrow <code>FileReader</code> with custom options.\nA low-level interface for reading <code>RecordBatch</code> data from a …\nArrow Stream reader\nThe blocks in the file\nA scratch buffer when a read is split across multiple …\nThe buffers comprising this array\nBuild <code>FileReader</code> with given reader.\nOptional compression codec\nCoordinates reading arrays based on data types.\nReads the correct number of buffers based on list type and …\nReads the correct number of buffers based on list type and …\nReads the correct number of buffers based on data type and …\nA counter to keep track of the current block that should …\nReturn user defined customized metadata\nUser defined metadata\nThe raw data buffer\nThe decoder\nLookup table for dictionaries by ID\nDecoded dictionaries indexed by dictionary id\nOptional dictionaries for each schema field.\nAn indicator of whether the stream is complete.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a mutable reference to the underlying reader.\nGets a mutable reference to the underlying reader.\nGets a reference to the underlying reader.\nGets a reference to the underlying reader.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if the stream is finished\nPassed through to construct <code>VerifierOptions</code>\nPassed through to construct <code>VerifierOptions</code>\nCreate a new <code>FileDecoder</code> with the given schema and version\nOptions for creating a new <code>FileReader</code>.\nThe fields comprising this array\nReturn the number of batches in the file\nParse an encapsulated message\nOptional projection\nOptional projection for which columns to load (zero-based …\nRead the data for a given block\nRead a buffer based on offset and length From …\nRead the dictionary from the buffer and provided metadata, …\nRead the dictionary with the given block and data buffer\nRead the footer length from the last 10 bytes of an Arrow …\nCreates a record batch from binary data using the …\nRead the RecordBatch with the given block and data buffer\nBuffered file reader that supports reading and seeking\nStream reader\nWhether or not array data in input buffers are required to …\nReturn the schema of the file\nReturn the schema of the stream\nThe schema that is read from the stream’s first message\nThe schema of this decoder, if read\nRead a specific record batch\nThe decoder state\nThe total number of blocks, which may contain record …\nTry to create a new file reader\nTry to create a new stream reader with the reader wrapped …\nTry to create a new stream reader but do not wrap the …\nThe format version\nFlatbuffers option for parsing the footer. Controls the …\nFlatbuffers option for parsing the footer. Controls the …\nSpecify a projection\nOptional projection for which columns to load (zero-based …\nSpecifies whether or not array data in input buffers is …\nDecoding the message body\nReached the end of the stream\nDecoding the message header\nDecoding the message flatbuffer\nA low-level interface for reading <code>RecordBatch</code> data from a …\nA scratch buffer when a read is split across multiple …\nTry to read the next <code>RecordBatch</code> from the provided <code>Buffer</code>\nLookup table for dictionaries by ID\nSignal the end of stream\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>StreamDecoder</code>\nWhether or not array data in input buffers are required to …\nThe schema of this decoder, if read\nThe decoder state\nSpecifies whether or not array data in input buffers is …\nTemporary buffer\nIf we have read a continuation token\nThe message flatbuffer\nNumber of bytes read into buf\nThe size of the message flatbuffer\nKeeps track of dictionaries that have been written, to …\nStores the encoded data, which is an crate::Message, and …\nWriter for an IPC file\nHandles low level details of encoding <code>Array</code> and <code>Schema</code> …\nIPC write options used to control the behaviour of the …\nWriter for an IPC stream\nWrite padding after memory buffers to this multiple of …\nArrow buffers to be written, should be an empty vec for …\nCompression, if desired. Will result in a runtime error if …\nThe number of bytes between each block of bytes, as an …\nWhether to truncate the buffer\nUser level customized metadata\nWrite dictionary values into two sets of bytes, one for …\nDictionary blocks that will be written as part of the IPC …\nKeeps track of dictionaries that have been written\nKeeps track of dictionaries that have been written\nEncodes a batch to a number of EncodedData items …\nWrite footer and closing tag, then mark the writer as done\nWrite continuation bytes, and mark the stream as done\nWhether the writer footer has been written, and the writer …\nWhether the writer footer has been written, and the writer …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns byte width for a buffer spec. Only for …\nReturns the values and offsets <code>Buffer</code> for a ByteArray with …\nSimilar logic as <code>get_byte_array_buffers()</code> but slices the …\nGets a mutable reference to the underlying writer.\nGets a mutable reference to the underlying writer.\nGets a reference to the underlying writer.\nGets a reference to the underlying writer.\nIn V4, null types have no validity bitmap In V5 and later, …\nKeep track of the dictionary with the given ID and values. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps the BufWriter housed in FileWriter.writer, …\nUnwraps the BufWriter housed in StreamWriter.writer, …\nAn encoded crate::Message\nThe metadata version to write. The Rust IPC writer …\nCreate a new <code>DictionaryTracker</code>. If <code>error_on_replacement</code> is …\nCalculate an alignment boundary and return the number of …\nWrite a <code>RecordBatch</code> into two sets of bytes, one for the …\nRecord blocks that will be written as part of the IPC …\nCommon functionality for re-encoding offsets. Returns the …\nReturns the arrow <code>SchemaRef</code> for this arrow file.\nA reference to the schema, used in validating record …\nTry to create a new writer, with the schema written as …\nTry to create a new writer, with the schema written as …\nTry create IpcWriteOptions, checking for incompatible …\nTry to create a new writer with IpcWriteOptions\nConfigures compression when writing IPC files.\nWrite a record batch to the file\nWrite a record batch to the stream\nWrite array data to a vector of bytes\nWrite a buffer into <code>arrow_data</code>, a vector of bytes, and …\nWrite a record batch to the writer, writing the message …\nThe legacy format is for releases before 0.15.0, and uses …\nWrite a message’s IPC data and buffers, returning …\nIPC write options\nIPC write options\nThe object to write to\nThe object to write to")