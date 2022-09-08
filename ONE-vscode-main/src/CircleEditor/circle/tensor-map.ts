// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class TensorMap {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TensorMap {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTensorMap(bb:flatbuffers.ByteBuffer, obj?:TensorMap):TensorMap {
  return (obj || new TensorMap()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTensorMap(bb:flatbuffers.ByteBuffer, obj?:TensorMap):TensorMap {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TensorMap()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

tensorIndex():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startTensorMap(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, nameOffset, 0);
}

static addTensorIndex(builder:flatbuffers.Builder, tensorIndex:number) {
  builder.addFieldInt32(1, tensorIndex, 0);
}

static endTensorMap(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTensorMap(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset, tensorIndex:number):flatbuffers.Offset {
  TensorMap.startTensorMap(builder);
  TensorMap.addName(builder, nameOffset);
  TensorMap.addTensorIndex(builder, tensorIndex);
  return TensorMap.endTensorMap(builder);
}

unpack(): TensorMapT {
  return new TensorMapT(
    this.name(),
    this.tensorIndex()
  );
}


unpackTo(_o: TensorMapT): void {
  _o.name = this.name();
  _o.tensorIndex = this.tensorIndex();
}
}

export class TensorMapT {
constructor(
  public name: string|Uint8Array|null = null,
  public tensorIndex: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const name = (this.name !== null ? builder.createString(this.name!) : 0);

  return TensorMap.createTensorMap(builder,
    name,
    this.tensorIndex
  );
}
}
